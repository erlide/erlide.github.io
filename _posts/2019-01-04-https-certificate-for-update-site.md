---
layout: post
title: "HTTPS certificate for update site"
date: 2019-01-04 17:17
comments: true
categories: 
---

On OSX it looks like the Eclipse updater doesn't install the HTTPS certificate used for the update site. 
Use the following instructions to install it locally (courtesy of @geib, thanks for that!)

1. Used a nice tool InstallCert.java to download the certificate.
    ```java InstallCert download.erlide.org:443```

2. ```keytool -exportcert -alias download.erlide.org-1 -keystore jssecacerts -storepass changeit -file download.erlide.org.cer```

3. ```keytool -importcert -alias download.erlide.org -keystore /Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home/jre/lib/security/cacerts -storepass changeit -file download.erlide.org.cer```

4. restart eclipse
