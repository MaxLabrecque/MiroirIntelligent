package com.cstjean.miroirapi.repo;

import com.cstjean.miroirapi.entity.Config;
import com.cstjean.miroirapi.entity.ConfigName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for the ConfigName entity.
 *
 * @author Charles-Antoine.
 */
@Repository
public interface ConfigNameRepo extends JpaRepository<ConfigName, Integer> {

  /**
   * Find a ConfigName by its name.*
   *
   * @param name The name to search for.
   * @return A ConfigName.
   */
  ConfigName findByName(String name);
}
