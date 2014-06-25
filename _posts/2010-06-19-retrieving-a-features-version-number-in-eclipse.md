---
layout: post
title: Retrieving a feature's version number in Eclipse
tags: eclipse  
author: Vlad
---

I wanted to print in the log my feature's version number, but was stumped because features aren't OSGi bundles and 
there wasn't an obvious way to find them. <!-- more --> After realizing that the `About` dialog displays the features, I looked 
at its code and extracted this snippet:

{% highlight java %}
IBundleGroupProvider[] providers = Platform.getBundleGroupProviders();
if (providers != null) {
  for (IBundleGroupProvider provider : providers) {
    IBundleGroup[] bundleGroups = provider.getBundleGroups();
    for (IBundleGroup group : bundleGroups) {
      if (group.getIdentifier().equals(featureId)) {
        version = group.getVersion();
      }
    }
  } 
}
{% endhighlight %}
