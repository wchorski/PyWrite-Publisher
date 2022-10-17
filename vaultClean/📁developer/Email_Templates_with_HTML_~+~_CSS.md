#html #email #template #css #custom #design #style #Mozilla #MailChimp
#Gmail #Outlook

## ⚙ Dev Env Setup
1. create a new `template.html` file for your template
2. create HTML boiler plate (VS Code shortcut type `!` and press enter)
3. quick tips I learned from the [resources](#resources) below
	- abuse `<table>` tags for layout
	- stick to old school CSS
	- make sure to stick any written content in paragraphs `<p>` tags
4. drop in the `<style>` inside the `<head>` tags
5. start with a container tag inside the `<body>`
	- in my case I used a `<table>`

### working inside VS Code
```html 
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>williamusic email template</title>

  <style>
    table, tr, th, td {
      border: none;
    }

    body, td, input, textarea, select, p{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 16px;
    }

    .eborder{
      background: #d3dfd8;
      padding: 2px;
      border-radius: 10px;
    }

    .ebody{
      background: #e7fdf8;
      background: linear-gradient(0deg,#d3dfd8 0%,#e7fdf8 100%);
      min-width: 350px;
      max-width: 360px;
      padding: 5px 10px;
      border-radius: 5px;
      color: #0a5e73;
    }

    .eheader{
      text-align: left;
      margin-bottom: 15px;
    }

    .efooter{
      color: #76a5af;
      padding-top: 17px;
      border-top: solid #d3dfd8 2px;
      text-align: right;
      transition: .3s;
    }

    .elink{
      visibility: hidden;
      opacity: 0;
      transition: .3s;
    }

    .efooter:hover .elink{
      visibility: visible;
      opacity: 1;
    }
  </style>

</head>

  
<body>

  <table>
    <tr>
      <td  class="eborder">

        <table class="ebody">
          <tr>
            <th>
              <p class="eheader">hello,</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>body</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="efooter"> <span class="elink">www.WilliaMusic.com</span>  🎵 William</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>


</body>

</html>
```

6. now copy / paste everything in your editor to [CSS Inliner Tool (mailchimp.com)](https://templates.mailchimp.com/resources/inline-css/) and see what it spits out

### result after CSS Inliner Tool
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>williamusic email template</title>

  
</head>

<body style="font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;">

  <table style="border: none;">
    <tr style="border: none;">
      <td class="eborder" style="border: none;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;background: #d3dfd8;padding: 2px;border-radius: 10px;">
        <table class="ebody" style="border: none;background: linear-gradient(0deg,#d3dfd8 0%,#e7fdf8 100%);min-width: 350px;max-width: 360px;padding: 5px 10px;border-radius: 5px;color: #0a5e73;">
          <tr style="border: none;">
            <th style="border: none;">
              <p class="eheader" style="font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;text-align: left;margin-bottom: 15px;">hello,</p>
            </th>
          </tr>
          <tr style="border: none;">
            <td style="border: none;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;">
              <p style="font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;">body</p>
            </td>
          </tr>
          <tr style="border: none;">
            <td style="border: none;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;">
              <p class="efooter" style="font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 16px;color: #76a5af;padding-top: 17px;border-top: solid #d3dfd8 2px;text-align: right;transition: .3s;"> <span class="elink" style="visibility: hidden;opacity: 0;transition: .3s;">www.WilliaMusic.com</span>  🎵 William</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

  
</body>
</html>
```

This ^ above glob of text is what you'll paste in your email client as `HTML`. Then you should be able to edit the "body" with the normal rich text editor. 

My email client **Thunderbird** has a very handy extension called [QuickText](https://addons.thunderbird.net/en-US/thunderbird/addon/quicktext/?src=search) that makes it easy to drop in any number of templates or scripts with an `alt + 1` shortcut

I checked what the _received mail_ looked like in different clients
- **Gmail (desktop browser and gmail Android client)** - looked exactly the same as sent
- **Thunderbird** - looks exactly the same
- **Outlook** - it lost a few things like `padding`, `border-radius`, and `linear-gradient` (but I'm still happy on how it turned out)

---

## resources
- [CSS Inliner Tool | Email Design Reference (mailchimp.com)](https://templates.mailchimp.com/resources/inline-css/)
- [Live Server - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [css - Best practices for styling HTML emails - Stack Overflow](https://stackoverflow.com/questions/4829254/best-practices-for-styling-html-emails)
- [Common HTML Mistakes | Mailchimp](https://mailchimp.com/help/common-html-mistakes/)
- - [Thunderbird Mail Client](https://www.thunderbird.net/)
	- "Simple Brow" theme
	- template Plugin - [QuickText](https://addons.thunderbird.net/en-US/thunderbird/addon/quicktext/?src=search)
	- conversation view plugin - [Thunderbird Conversations](https://addons.thunderbird.net/en-US/thunderbird/addon/gmail-conversation-view/?src=search) 

---
## backlinks
[_developer_box📦](📁developer/_developer_box📦.md)