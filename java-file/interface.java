package com.flick.osint;

import java.util.List;
import java.util.Map;

/**
 * Flick OSINT Java Interface
 * Defines core requirements for data collection modules.
 */
public interface FlickInterface {
    
    // Scan a specific username across platforms
    Map<String, String> scanUsername(String username);
    
    // Check specific network targets (IP/Domain)
    boolean checkConnectivity(String target);
    
    // Generate a list of available OSINT modules
    List<String> getAvailableModules();
    
    // System metadata
    default String getVersion() {
        return "1.7.5";
    }
}
