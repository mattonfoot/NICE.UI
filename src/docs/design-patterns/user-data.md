---
section: Design patterns
title: User data
description: There is a balance to be found gathering and storing information for a user to enhance their experience
template: page.html
disqus_identifier: /design-patterns/user-data
nav_sort: 9
nav_groups:
  - primary
---

Because we use third party tracking and analysis tools to help understand what needs our users have, we have to explain to our visitors that they will be tracked anonymously through the use of cookies.

[You can read the full E-Privacy policy here](http://www.nice.org.uk/cookies).

<div class="notice notice-important">
<p><strong>Important</strong> Please ensure that your service conforms to the NICE E-Privacy policy and notify the appropriate department if it does not.</p>
</div>

## Data Storage

The [e-Privacy Directive](http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:31995L0046&from=en) was updated in 2012 but still requires that website inform users in an obvious way that data is being stored regarding their online activity within a website - [See the ICO for a summary of this directive](https://ico.org.uk/for-organisations/guide-to-pecr/cookies/). THis extends beyond cookies to the information that we store on our server or in local storage regarding a users activity.

Items exempt from this directive are items of data regarding personal user settings, or a users authenticated status. It is acceptable to presume that a user that creates an account to access further, enriched or customised content is happy to allow data tracking within the current website.

## Standard storage keys

If you are creating a new service or updating an existing service please refer to the following table for standard storage keys for specific types of information.

<table>
  <thead>
    <tr>
      <th>key</th><th>type</th>
      <th>usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>seen_cookie_message</var></td><td>String</td>
      <td>Indicates whether a user has had the The e-Privacy banner displayed to them on the active service. It is set to the the value <samp>'yes'</samp> if they have.</td>
    </tr>
    <tr>
      <td><var>ASP.NET_SessionId</var></td><td>String</td>
      <td>General purpose platform session key, used by sites written with Miscrosoft .NET based technologies. Usually used to maintain an anonymised user session by the server. [For more infomation see cookiepedia](http://cookiepedia.co.uk/cookies/ASP.NET_SessionId)</td>
    </tr>
    <tr>
      <td><var>uid</var></td><td>String</td>
      <td>General purpose userid key, used to identify a known user so the service can be tailored to their needs or usage patterns. Usually used to maintain an known user session by the server.</td>
    </tr>
    <tr>
      <td><var>__nrpa_2.2</var></td><td>String</td>
      <td>A session identifier, used by the operational service to authenticate the user against NICE Accounts to assertain acces rights and policies for an individual.</td>
    </tr>
    <tr>
      <td><var>ud</var></td><td>JSON</td>
      <td>General purpose storage key used to keep data for this session. Used for storing user interface settings that need to persist thorough the users active session. The user data plugin provided by the NICE UI library uses this key.</td>
    </tr>
    <tr>
      <td><var>Orchrd</var></td><td>JSON</td>
      <td>Orchards default session storage bucket available to all Orchard CMS Modules. Used for storing user interface settings that need to persist thorough the users active session.</td>
    </tr>
  </tbody>
</table>

If you need to store different information than has been identified here then you will also need to ensure that your use case is covered by the existing e-Privacy directive and cookie policy.

## Cookies vs Local Storage

Best practice should be to use client side data storage only for user interface settings
or session specific data that does not affect the way the server renders a page. Any
user or session data that the web server needs to adjust the page content should be
stored by that server and not in the client browser or device.

**Cookie data** should only be used to provide unique identifiers of a client to the server
in a request such as <code>uid</code>. Web services must not pass serialized data
objects between client and server using cookies as this increases the size of future
requests to this domain.

**Local storage** should be the method of choice for storing user interface settings. If
not available on the current device then cookie data can be used.
