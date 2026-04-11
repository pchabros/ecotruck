{
  description = "ecoTRUCK dashboard";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      perSystem = {pkgs, ...}: {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_24
            python313
            python313Packages.ipython
          ];
          shellHook = ''
            echo "Welcome to the dev shell!"
          '';
        };
      };
    };
}
