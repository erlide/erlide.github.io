---
layout: page
title: "Installation"
---

<div style="float:right;width:49%;padding-left: 20px; margin-top: 110px;">
	<p>
		These are Eclipse update site URLs, which you need to paste into the update manager within Eclipse! <strong>Right-click and 'Copy Link'</strong>
	</p>
	<hr/><br/>
	<p>
		For releases after 0.29.11, the update sites are also available as zip archives from <a href="https://github.com/erlide/erlide/releases">Github's erlide releases page</a>.
	</p>
</div>
<div style="width: 48%;">
	<div class="pricing">
		<table>
			<tbody>
				<tr>
					<td class="focus">
						Update Sites
						<span>Use Update Manager in Eclipse</span>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						<a  rel="popover" data-content="This is an Eclipse update site URL, which you need to paste into the update manager within Eclipse!" data-original-title="Right-click and 'Copy Link'" href="http://download.erlide.org/update" class="has-popover btn btn-primary btn-large" style="width: 70%;">Update site</a>
						<br/>
						<span style="color: #444;">
							Or drag and drop into a running Eclipse Juno+ workspace {%  include custom/marketplace.html %}
						</span>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						<a
rel="popover" 
data-content="This is an Eclipse update site URL, which you need to paste into the update manager within Eclipse!" 
data-original-title="Right-click and 'Copy Link'" 
href="http://download.erlide.org/update/beta" 
class="has-popover btn btn-primary btn-large"
style="width: 70%;">Latest Beta</a>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						<a
rel="popover" 
data-content="This is an Eclipse update site URL, which you need to paste into the update manager within Eclipse!" 
data-original-title="Right-click and 'Copy Link'" 
href="http://download.erlide.org/update/nightly" 
class="has-popover btn btn-primary btn-large"
style="width: 70%;">Bleeding Edge!</a>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td></td>
				</tr>
			</tfoot>
		</table>
	</div>
</div>

<h2>Instructions</h2>
<div class="itemizedlist">
	<ul class="disc">
		<li>
			<p>
				Install Erlang R15B or later, if it isn't already present on your system. On
				Windows systems, use a path with no spaces in it.
			</p>
		</li>
		<li>
			<p>Install Eclipse 3.8 or later, if you didn't already.</p>
		</li>
		<li>
			<p>
				If your network uses a proxy to connect to the internet, fill in the
				appropriate data in
				<code>Window &rarr; Preferences &rarr; General
					&rarr; Network connections</code>
				.
			</p>
		</li>
		<li>
			<p>
				Install Erlide by going to
				<code>Help &rarr; Install new software...</code>
				. In the dialog, enter <strong class="userinput"><code>http://download.erlide.org/update</code></strong> 
				as URL. Follow the dialogs with the obvious choices and in
				the end you will be asked to restart.
			</p>
			<p>
				An alternative way to install is from the Eclipse marketplace
				<code>Help &rarr; Eclipse Marketplace...</code>
				or simply by dragging and dropping the button below into a running Eclipse workspace 
					{% include custom/marketplace.html %}
			</p>
		</li>
		<li>
			<p>
				Restart. If you already have Erlang installed in a "usual" place, erlide will find it, otherwise 
				you have to configure it yourself. Go to
				<code>Window &rarr; Preferences &rarr; 
					Erlang &rarr; Installed runtimes</code>
				and add an entry
				(or several) for your Erlang installation(s) of choice. The required
				parameters are the name and the path to the top level directory
				(i.e.
				<code class="varname">$ERL_TOP</code>
				). Now restart again.
			</p>
		</li>
		<li>
			<p>Done! You're ready to start exploring.</p>
		</li>
	</ul>
</div>
