import { HomePage } from "./home";

describe("HomePage", () => {
  let homepage: HomePage;

  beforeEach(() => {
    homepage = new HomePage();
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
});
