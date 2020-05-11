
# GAE firewall rules terraformer

  

This bit of code is used to automatically generate the terraform resources to whitelist all Google internal IPs used to ping our App Engine, allowing us to perform uptime checks.

  

## Prerequisite

#### Dependencies

_Node_ and _npm_ (or _yarn_) must already be installed.

#### Retrieve GCP internals IPs

Go to your GCP monitoring project. Navigate to Monitoring > UpTime Checks.

Between the "_Uptime checks_" title and the "_CREATE UPTIME CHECKS_" button, you will see a download icon with the "Download whitelisted checker IP adresses" tooltip.

Once clicked, it will download a file named _uptime-source-ips.txt_. Keep this file around while following the next steps.


## Installation

  

This module must always be installed globally. 
With _npm_:

```bash
npm i -g gae-fw-rules-terraformer
```
Or with _yarn_:
```bash
yarn global add gae-fw-rules-terraformer
```

## Usage

```bash

gae-fw-rules-terraformer --dep=<firstDependency> --prio=<startingPriority> --source=<sourcePath> --target=<targetPath>

```
  
\<firstDependency\> should be and already existing firewall rule, the "ALLOW" rule with the highest priority would be better.


\<startingPriority\> the rule priority which will be incremented 1000 by 1000 by the program. i.e: if you have 50 IPs adresses to include, starting with the priority 10 000 will assigning their priorities respectively to 100000, 11000, 12000, [...], 59000, 600000.

\<sourcePath\> the path to your IPs list file (see above). Can either be relative or absolute.

\<target\> a regex matching the Terraform file paths to update. Can either be relative or absolute.
  

Real-life usage example :

  

```bash

gae-fw-rules-terraformer --dep=allow-rule-russia --prio=8000 --source=/Users/developer/dev/files/uptime-source-ips.txt --target=./environments/**/main.tf

```

**NB**: it is recommended to run the terraform format command on all your files after running this script. From your Terraform project root:

 ```bash

terraform fmt -recursive

``` 

## Contributing

  

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.