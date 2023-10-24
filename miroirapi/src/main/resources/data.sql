insert ignore into config_name (id, name) values
  (1, 'timeMode'),
  (2, 'timezone'),
  (3, 'brightnessStart'),
  (4, 'brightnessEnd'),
  (5, 'brightnessIdle');

insert ignore into config (id, config_name_id, config_value) values
  (1, 1, 'true'),
  (2,2, 'America/New_York'),
  (3, 3, '9'),
  (4, 4, '18'),
  (5, 5, '30');
