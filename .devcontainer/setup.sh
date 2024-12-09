#!/usr/bin/env bash
set -e

export BUN_INSTALL="$HOME/.bun"
export PATH="$PATH:$BUN_INSTALL/bin"

bun install
bun pm trust --all || true 2> /dev/null

if [ ! -d .husky/_ ]; then
    bun run prepare
fi
