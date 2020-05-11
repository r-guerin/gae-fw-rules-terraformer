# GCP firewall rules terraformer

This bit of code is used to automatically generate the terraform resources to whitelist all Google internal IPs used to ping our App Engine, allowing us to perform uptime checks.

## Prerequisite

#### Dependencies

_Node_ and _npm_ must already be installed.

#### Retrieve GCP internals IPs

Go to your GCP monitoring project. Navigate to **Monitoring** > **UpTime Checks**.
Between the "_Uptime checks_" title and the "_CREATE UPTIME CHECKS_" button, you will see a download icon with the "Download whitelisted checker IP adresses" tooltip.

Once clicked, it will download a file named **uptime-source-ips.txt**. Rename it to **uptime-source-ips.json** and place it into the **helpers/firewall-rules/source** folder.

#### Paths configurations

Twos paths are defined in the _helpers/firewall-rules/config.js_ file :

**SOURCE_IPS_FILE_PATH**: the path to your ips source file, default to _source/uptime-sources-ips.json_

**TARGET_FILES_PATH**: a regex matching the Terraform files to update, default to _../../environments/\*\*/main.tf_ which will update all main.tf files in the environments subfolders.

## Installation

Go to the _helpers/firewall-rules_ folder and perform a _npm_ installation.

```bash
cd helpers/firewall-rules
npm i
```

## Usage

From the _helpers/firewall-rules_ folder run the following command :

```bash
npm run start <firstDependencyName> <startingPriority>
```

**<firstDependencyName>** will be and already existing firewall rule, the "ALLOW" rule with the highest priority would be better.

**<startingPriority>** the rule priority which will be incremented 1000 by 1000by the program. i.e: if you have 50 IPs adresses to include, starting with the priority 10 000 will assigning their priorities respectively to 100000, 11000, 12000, ..., 59000, 600000.

Real-life usage example :

```bash
npm run start allow-rule-russia 8000
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
