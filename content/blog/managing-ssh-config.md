---
path: ssh-config
date: 2020-09-25T18:14:37.951Z
title: Managing SSH Config
description: cheatsheet
---


## Configuration

```
User andres.bonifacio

Host staging-api
  HostName staging.api.com

# wild card
Host production?
  HostName %h.api.com
```

## Usage

```
ssh staging-api
ssh production9
# connects to andres.bonifactio@production9.api.com
```


## References
More advance examples here

[https://www.endpoint.com/blog/2011/01/07/ssh-config-wildcards-and-multiple](https://www.endpoint.com/blog/2011/01/07/ssh-config-wildcards-and-multiple)

[https://man.openbsd.org/ssh_config#TOKENS](https://man.openbsd.org/ssh_config#TOKENS)