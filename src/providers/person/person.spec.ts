import { CooperProvider } from './../../providers/cooper/cooper';
import { PersonProvider } from './../../providers/person/person';
// import { HomePage } from "./home";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";


describe("Person Component", () => {
	let personProvider, cooperProvider;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [PersonProvider, CooperProvider]
  }));

  beforeEach(inject([PersonProvider, CooperProvider], (p, c) => {
    personProvider = p;
    cooperProvider = c;
  }));

	it("should create the person provider", () => {
		expect(personProvider).toBeTruthy();
		expect(personProvider instanceof PersonProvider).toEqual(true);
	});

	it('doassessment should be defined', () => {
		spyOn(personProvider, 'doAssessment');

		personProvider.doAssessment(2500);

		expect(personProvider.doAssessment).toHaveBeenCalled();
		expect(personProvider.doAssessment).toHaveBeenCalledWith(2500);
	});

	it('cooper provider should be called', () => {
    personProvider.age = 25;
    personProvider.gender = 'female';

    spyOn(cooperProvider, 'assess');
		personProvider.doAssessment(2200);

		expect(cooperProvider.assess).toHaveBeenCalled();
		expect(cooperProvider.assess).toHaveBeenCalledWith(personProvider, 2200);
	});
});
