'use strict';

describe('Service: categoryService', function () {

  // load the service's module
  beforeEach(module('filmwebFrontApp'));

  // instantiate service
  var categoryService;
  beforeEach(inject(function (_categoryService_) {
    categoryService = _categoryService_;
  }));

  it('should do something', function () {
    expect(!!categoryService).toBe(true);
  });

});
