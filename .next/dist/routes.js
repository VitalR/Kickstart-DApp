'use strict';

var routes = require('next-routes')();

routes.add('/projects/new', '/projects/new').add('/projects/:address', '/projects/show').add('/projects/:address/requests', '/projects/requests/index').add('/projects/:address/requests/new', '/projects/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGlCQUMwQixBQUQxQixpQkFFSyxBQUZMLElBRVMsQUFGVCxzQkFFK0IsQUFGL0Isa0JBR0ssQUFITCxJQUdTLEFBSFQsK0JBR3dDLEFBSHhDLDRCQUlLLEFBSkwsSUFJUyxBQUpULG1DQUk0QyxBQUo1Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92cm9kaWtvdi93b3Jrc3BhY2UvZXRoZXJldW0vdWRlbXktY29tcGxldGUtZGV2LWd1aWRlL2tpY2tzdGFydC1kYXBwIn0=