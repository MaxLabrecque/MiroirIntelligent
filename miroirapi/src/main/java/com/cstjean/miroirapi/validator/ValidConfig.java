package com.cstjean.miroirapi.validator;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.TYPE;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Annotation class for the validation of ConfigDto.
 *
 * @author Charles-Antoine.
 */
@Constraint(validatedBy = ConfigNameValueValidator.class)
@Target({TYPE, FIELD, ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidConfig {
  /**
   * Message to display when the validation fails.
   *
   * @return the message to display when the validation fails.
   */
  String message() default "{com.cstjean.miroirapi.validator.ValidConfig.message}}";

  /**
   * Validation groups.
   *
   * @return the class<?>[].
   */
  Class<?>[] groups() default {};

  /**
   * Payload Attribute.
   *
   * @return the class<? extends payload>[].
   */
  Class<? extends Payload>[] payload() default {};
}
