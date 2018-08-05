import { PerformanceDataProvider } from './../../providers/performance-data/performance-data';
import { CooperProvider } from './../../providers/cooper/cooper';
import { PersonProvider } from './../../providers/person/person';
import { HomePage } from "./home";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";
import { Angular2TokenService } from 'angular2-token';
import {Http, BaseRequestOptions, RequestMethod} from '@angular/http'
import {MockBackend} from '@angular/http/testing';

describe("HomePage", () => {
  let homepage, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage
      ],
      imports: [IonicModule.forRoot(HomePage)],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, defaultOptions) => {
            return new Http(backend, defaultOptions)
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        PersonProvider, CooperProvider, PerformanceDataProvider, Angular2TokenService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    homepage = fixture.componentInstance;
  });

  it("should create the home page", () => {
    expect(homepage).toBeTruthy();
    expect(homepage instanceof HomePage).toEqual(true);
  });

  it('should have user default values', () => {
    expect(homepage.user).toEqual({ distance: 1000, age: 20 });
  });

  it('should have calculate function', () => {
    
    spyOn(homepage, 'calculate'); // we use jasmine to spy on a function
    
    homepage.calculate()

    expect(homepage.calculate).toHaveBeenCalled(); // check if the function has been called
  });

  it('calculate function should call person provider doAssessment function', inject([PersonProvider, Angular2TokenService], (person, _tokenService) => {
    _tokenService.init({
      apiBase: 'https://your-cooper-api.herokuapp.com/api/v1'
    });
    
    let user = { age: 25, gender: 'female', distance: 2500 };
    spyOn(person, 'doAssessment').and.returnValue('Above average');
    
    homepage.calculate(user);

    expect(person.doAssessment).toHaveBeenCalled();
    expect(person.doAssessment).toHaveBeenCalledWith(2500);
    expect(person.age).toEqual(25);
    expect(person.gender).toEqual('female');
  }))
});
