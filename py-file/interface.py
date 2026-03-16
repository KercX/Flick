from abc import ABC, abstractmethod
from typing import Dict, List, Optional

class FlickOSINTInterface(ABC):
    """
    Base Interface for all Flick OSINT modules.
    Ensures consistent structure across Python scraping engines.
    """

    @abstractmethod
    def __init__(self, target: str):
        self.target = target
        self.results: Dict[str, str] = {}
        self.version = "1.9.0"

    @abstractmethod
    def scan(self) -> Dict[str, str]:
        """Method to execute the intelligence gathering process."""
        pass

    @abstractmethod
    def validate_target(self) -> bool:
        """Method to verify if the input (username/ID) is valid."""
        pass

    def get_report(self) -> str:
        """Common method to return a summary of findings."""
        return f"Report for {self.target}: Found {len(self.results)} sources."

    @property
    def info(self) -> str:
        return f"Flick Engine Module v{self.version}"
