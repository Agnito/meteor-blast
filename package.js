Package.describe({
  summary: "Blast text apart to make it manipulable.",
  version: "0.0.2",
  git: "https://github.com/Agnito/meteor-blast.git",
  name: "agnito:blast"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.use('jquery');
  api.addFiles('blast.min.js', 'client');
});

