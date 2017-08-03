beforeEach(function () {
	jasmine.addMatchers({
		toBeReferencedFrom: function () {
			return {
				compare: function (actual, expected) {
					var target, object, propertyName, result;
					target = actual;
					object = expected;
					result = false;
					for (propertyName in object) {
						if (object[propertyName] === target) {
							result = true;
							break;
						}
					}
					return { pass: result };
				}
			};
		}
	});
});
