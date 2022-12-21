import {TestBed} from '@angular/core/testing';

import {ClientInfoService} from './client-info.service';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('ClientInfoService', () => {
  let service: ClientInfoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ClientInfoService
      ]
    });
    service = TestBed.inject(ClientInfoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an API call', () => {
    const newForm = {name: 'Doga', email: 'isterdoga@hotmail.com', phoneNumber: 6478942802, colour: 'Green'};

    // @ts-ignore
    service.addClientInfo(newForm).subscribe({
      next: data => expect(data).toEqual(newForm, 'should not return'),
      error: fail
    });

    const req = httpTestingController.expectOne('/api/subscribeconfirm');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newForm);

    const expectedResponse = new HttpResponse({status: 200, statusText: 'Ok', body: newForm});
    req.event(expectedResponse);
  });
});
