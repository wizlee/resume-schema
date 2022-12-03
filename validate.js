var fs = require("fs");
var resumeSchema = require("resume-schema");
var resumeObject = JSON.parse(fs.readFileSync("resume.json", "utf8"));
resumeSchema.validate(resumeObject, function(err, data) {
  if (err) {
    console.log(`error!\n`);
    console.log(err);
  }
});
