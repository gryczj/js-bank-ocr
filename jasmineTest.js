const Jasmine = require("jasmine");
const jasmineReporters = require("jasmine-reporters");

const jasmineTest = new Jasmine();
jasmineTest.loadConfigFile("./jasmine.json");

jasmineTest.addReporter(new jasmineReporters.TerminalReporter());

jasmineTest.execute();