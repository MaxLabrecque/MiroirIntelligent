package com.cstjean.miroirapi.validator;

import com.cstjean.miroirapi.dto.ConfigDto;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

/**
 * Validates the config name and value.
 *
 * @author Charles-Antoine.
 */
public class ConfigNameValueValidator implements ConstraintValidator<ValidConfig, ConfigDto> {

  /**
   * Validates the config name and value.
   *
   * @param configDto the config dto.
   * @param constraintValidatorContext the constraint validator context.
   * @return true if the combination of the config name and value is valid.
   */
  @Override
  public boolean isValid(ConfigDto configDto,
                         ConstraintValidatorContext constraintValidatorContext) {
    try {
      return switch (configDto.getConfigName()) {
        case "timeMode" ->
          configDto.getConfigValue().equals("true") || configDto.getConfigValue().equals("false");

        case "timezone" -> configDto.getConfigValue().matches("^[a-zA-Z]+/[a-zA-Z_]+$");

        case "brightnessStart", "brightnessEnd" ->
          configDto.getConfigValue().matches("^[0-2]?[0-9]$");

        case "brightnessIdle" -> configDto.getConfigValue().matches("^[0-9]+$");

        default -> false;
      };
    } catch (Exception e) {
      return false;
    }
  }
}
