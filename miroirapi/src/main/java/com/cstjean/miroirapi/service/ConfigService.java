package com.cstjean.miroirapi.service;

import com.cstjean.miroirapi.dto.ConfigDto;
import com.cstjean.miroirapi.entity.Config;
import com.cstjean.miroirapi.entity.ConfigName;
import com.cstjean.miroirapi.repo.ConfigNameRepo;
import com.cstjean.miroirapi.repo.ConfigRepo;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

/**
 * Service for the Config entity.
 *
 * @author Charles-Antoine.
 */
@Service
public class ConfigService {

  /**
   * Repository for the Config entity.
   */
  @Autowired
  private ConfigRepo configRepo;

  /**
   * Repository for the ConfigName entity.
   */
  @Autowired
  private ConfigNameRepo configNameRepo;

  /**
   * Get all configs.
   *
   * @return a list of configs.
   */
  public List<ConfigDto> getAllConfig() {
    List<Config> configList = configRepo.findAll();
    List<ConfigDto> configDtoList = new ArrayList<>();
    for (Config config : configList) {
      ConfigDto configDto = new ConfigDto();
      configDto.setConfigName(config.getConfigName().getName());
      configDto.setConfigValue(config.getConfigValue());
      configDtoList.add(configDto);
    }
    return configDtoList;
  }

  /**
   * Modify the config or create it if it doesn't exist.
   *
   * @param config the config to modify.
   * @return the modified config.
   */
  public ConfigDto handleConfigValue(ConfigDto config) {
    Optional<Config> configFound = configRepo.getConfigByConfigName_Name(config.getConfigName());
    if (configFound.isPresent()) {
      configFound.get().setConfigValue(config.getConfigValue());
      configRepo.save(configFound.get());
    } else {
      ConfigName configName = configNameRepo.findByName(config.getConfigName());

      if (configName == null) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Config name doesn't exist.");
      }

      Config configToSave = new Config();
      configToSave.setConfigName(configName);
      configToSave.setConfigValue(config.getConfigValue());
      configRepo.save(configToSave);
    }

    return config;
  }
}
