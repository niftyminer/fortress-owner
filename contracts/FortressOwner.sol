//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address owner);
}

interface IGold {
    function getStaker(uint256 tokenId) external view returns (address);
}

interface IRoE {
    function getFortress(bytes32 _fortressHash)
        external
        view
        returns (
            bytes16 name,
            address owner,
            int256 x,
            int256 y,
            uint256 wins
        );
}

contract FortressOwner {
    function balanceOf(address owner) external view returns (uint256) {
        uint256[500] memory ids = [];
        IERC721 roeWrapper = IERC721(
            0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea
        );
        IRoE roe = IRoE(0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea);
        IGold gold = IGold(0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea);

        uint16 balance = 0;
        for (uint16 i = 0; i < ids.length; i++) {
            try gold.getStaker(ids[i]) returns (address stakeOwner) {
                if (stakeOwner == owner) {
                    balance = balance + 1;
                }
            } catch {
                try roeWrapper.ownerOf(ids[i]) returns (
                    address wrappedFortressOwner
                ) {
                    if (wrappedFortressOwner == owner) {
                        balance = balance + 1;
                    }
                } catch {
                    try roe.getStaker(ids[i]) returns (address roeOwner) {
                        if (roeOwner == owner) {
                            balance = balance + 1;
                        }
                    } catch {}
                }
            }
        }
        return balance;
    }
}
