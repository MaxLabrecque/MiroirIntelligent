package com.cstjean.miroirapi.dto;

import com.cstjean.miroirapi.validator.ValidConfig;
import lombok.Getter;
import lombok.Setter;

/**
 * DTO for the Config entity.
 *
 * @author Charles-Antoine.
 */
@Getter
@Setter
@ValidConfig(message = "Invalid config values")
public class ConfigDto {

  /** Name of the config.
   * -- GETTER --
   *  Getter of the config name.
   * -- SETTER --
   * Setter of the config name.
   *
   * @return the config name
   */
  private String configName;

  /** Value of the config.
   * -- GETTER --
   *  Getter of the config value.
   * -- SETTER --
   * Setter of the config value.
   *
   * @return the config value
   */
  private String configValue;
}
