// TODO: Fix these unit tests!
describe("Env", function() {
  var env;
  beforeEach(function() {
    env = new j$.Env();
  });

  describe("#pending", function() {
    it("throws the Pending Spec exception", function() {
      var PendingSpecException = j$.Spec.PendingSpecException;

      expect(function() {
        env.pending();
      }).toThrow(new PendingSpecException());
    });

    it("throws the Pending Spec exception with custom message", function() {
      var PendingSpecException = j$.Spec.PendingSpecException;

      expect(function() {
        env.pending('Doesnt work, issue #123');
      }).toThrow(new PendingSpecException('Doesnt work, issue #123'));
    });
  });

  describe("#topSuite", function() {
    it("returns the Jasmine top suite for users to traverse the spec tree", function() {
      var suite = env.topSuite();
      expect(suite.description).toEqual('Jasmine__TopLevel__Suite');
    });
  });
});
