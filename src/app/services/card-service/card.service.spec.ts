import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { CardService } from './card.service';



describe('CardService', () => {
  let service: CardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CardService ]
    });

    service = TestBed.get(CardService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPeople()', () => {
    it('should fetch data', () => {
      const mockedData: any = {
        count: 87,
        next: 'https://swapi.co/api/people/?page=2',
        previous: null,
        results: [
          { name: 'Luke Skywalker', height: '172', mass: '77' },
          { name: 'C-3PO', height: '167', mass: '75'}
        ]
      };

      service.getPeople().subscribe(response => {
        expect(response.length).toBe(2);
        expect(response).toEqual(mockedData.results);
      });

      const request: TestRequest = httpMock.expectOne('api/people')

      expect(request.request.method).toBe('GET');

      request.flush(mockedData);
    });
  });
});
