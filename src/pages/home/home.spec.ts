import { TestBed } from "@angular/core/testing";
import { HomePage } from "./home";
import {
  IonicPageModule,
  Platform,
  NavController,
  MenuController,
  Config,
  App,
  DomController,
  Keyboard,
	GestureController,
	Form,
	DeepLinker,
	Haptic
} from "ionic-angular";
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  NavControllerMock,
  MenuControllerMock,
	ConfigMock,
	KeyboardMock,
	FormMock,
	HapticMock
} from "ionic-mocks";
import { DeepLinkerMock} from '../../../test-config/mocks'
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

describe("HomeComponent", () => {
  let fixture, component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicPageModule.forChild(HomePage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
				{ provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
				{ provide: NavController, useFactory: () => NavControllerMock.instance() },
				{ provide: MenuController, useFactory: () => MenuControllerMock.instance() },
				{ provide: Config, useFactory: () => ConfigMock.instance() },
				{ provide: Keyboard, useFactory: () => KeyboardMock.instance() },
				{ provide: Form, useFactory: () => FormMock.instance() },
				{ provide: Haptic, useFactory: () => HapticMock.instance() },
				{provide: DeepLinker, useClass: DeepLinkerMock},
				App, DomController, GestureController

      ]
    });

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it("should create the home page", () => {
    expect(component).toBeTruthy();
    expect(component instanceof HomePage).toEqual(true);
  });

  it('should have user default values', () => {
    expect(component.user).toEqual({ distance: 1000, age: 20 });
  });

  it('should have calculate function', () => {
    expect(component.calculate).toBeTruthy();
  });
});
