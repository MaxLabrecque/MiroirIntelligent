package com.cstjean.miroirapi.repo;

import com.cstjean.miroirapi.entity.Config;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for the Config entity.
 *
 * @author Charles-Antoine.
 */
@Repository
public interface ConfigRepo extends JpaRepository<Config, Integer> {

  /**
   * Find a list of Config by ConfigName.

   * @param configName The ConfigName to search for.
   * @return A list of Config.
   */
  Optional<Config> getConfigByConfigName_Name(String configName);
}
