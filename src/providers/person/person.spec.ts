import { PersonProvider } from "./person";

describe("Person Component", () => {
	let personProvider: PersonProvider;

	beforeEach(() => {
		personProvider = new PersonProvider();
	});

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
});
