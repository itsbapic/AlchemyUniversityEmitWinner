// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface WinnerContract {
    function attempt() external;
}

contract AttemptSender {
    function sendAttempt(address _contract) public {
        return WinnerContract(_contract).attempt();
    }
}