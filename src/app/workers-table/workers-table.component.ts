/* eslint-disable import/no-extraneous-dependencies */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { Worker } from '../worker.interface';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class WorkersTableComponent {
  public workersList: Array<Worker>;

  public workerDialog: boolean;

  public worker: Worker;

  public submitted: boolean;

  constructor(
    private workersService: WorkersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.workersService.getWorkers().subscribe((res: any) => (this.workersList = res.data));
  }

  public openNew() {
    this.worker = {
      _id: '',
      email: '',
      team: '',
      fullName: '',
      status: '',
    };
    this.submitted = false;
    this.workerDialog = true;
  }

  public editWorker(worker: Worker) {
    this.worker = { ...worker };
    this.workerDialog = true;
  }

  public deleteWorker(worker: Worker, event: Event) {
    event.stopPropagation();
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + worker.fullName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.workersList = this.workersList.filter((el) => el._id !== worker._id);
        this.worker = {
          _id: '',
          email: '',
          team: '',
          fullName: '',
          status: '',
        };
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Worker Deleted',
          life: 3000,
        });
      },
    });
  }

  public hideDialog() {
    this.workerDialog = false;
    this.submitted = false;
  }

  public saveWorker() {
    this.submitted = true;

    if (this.worker.fullName.trim()) {
      this.workersService.addWorker(this.worker).subscribe((res) => {
        console.log(res);
      });
      if (this.worker._id) {
        this.workersList[this.findIndexById(this.worker._id)] = this.worker;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Worker Updated',
          life: 3000,
        });
      } else {
        this.worker._id = this.createId();
        this.workersList.push(this.worker);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Worker Added',
          life: 3000,
        });
      }

      this.workersList = [...this.workersList];
      this.workerDialog = false;
      this.worker = {
        _id: '',
        email: '',
        team: '',
        fullName: '',
        status: '',
      };
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.workersList.length; i++) {
      if (this.workersList[i]._id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public createId(): string {
    let id = '';
    var chars = '0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  public getCity(worker: Worker): string | void {
    if (!worker.team) return 'No info about city';
    if (worker.team.includes('Mkp')) return 'Maykop';
    if (worker.team.includes('Tgn')) return 'Taganrog';
  }
}
