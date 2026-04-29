---
title: "Connect Calendar to Custom Agents"
emoji: "📅"
description: "Manage your schedule and automate meetings without ever leaving Notion 📅"
url: "https://www.notion.com/help/connect-calendar-to-custom-agents"
key: "help:connect-calendar-to-custom-agents"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/4re3I3OgAkvLKpyGQWIOVz/3e2ecb8796ea628b7610a70f34aba8f0/Group_178.png"
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

Custom Agents can connect to calendar to automate scheduling workflows. Once connected, agents can optimize your schedule, prepare and handle meeting logistics, and resolve scheduling conflicts through automated triggers or by chatting with the agent directly.

The Calendar connection for Custom Agents is available on Business and Enterprise plans.

This connection works with Notion Calendar, Google Calendar, and Apple Calendar.

## What your Custom Agent can do with Calendar

|                             |                                                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Action**                  | **What it does**                                                                                                            |
| Read events                 | View and retrieve information about existing calendar events, including title, time, description, attendees, and location   |
| Create event                | Add a new event to your calendar with specified details including title, time, description, attendees, and location         |
| Update event                | For events you’ve organized, modify existing event details like title, time, description, conferencing and other attributes |
| Add/remove attendees        | For events you’ve organized, modify the guest list for an event by adding new participants or removing existing ones        |
| Cancel event                | Remove an event from your calendar and notify attendees of the cancellation                                                 |
| Send calendar invite        | Generate and send invitations to participants for a calendar event                                                          |
| Find time with participants | Find and recommend times to schedule an event with multiple participants, even when there are conflicts                     |
| RSVP to an event            | Let you know when you have an event pending RSVP and RSVP to an event on your behalf                                        |

## How to connect Calendar to your Custom Agent

1. Chat with your agent. Give it specific direction on how to handle calendar events.

   * This can also be done manually in a Custom Agent's **`Settings`****.&#x20;**&#x47;o to **`Tools & Access`**, then choose `+ Add connection` → **`Calendar`** → **`Connect`**.

2. Go to **`Settings`** → **`Tools & Access`****.**

3. Choose the calendar(s) you want your agent to have access to.

4. Grant the permissions your agent needs for each connected calendar: **Read** or **Read and Write**.

5. Choose if the Agent should **Require confirmation&#x20;**&#x62;efore executing an action.

6. Test the connection. If the agent’s behavior isn’t what you expect, chat with your agent to clarify instructions.

**Tip:** Be specific in your instructions. For example: "Every morning at 8am, summarize today's meetings and send me a briefing" or "When a new external meeting is added, create a prep page in my Meetings database."

### Calendar triggers in Custom Agent

Add a Calendar-based trigger in your Custom Agent’s **`Settings`**.

1. Under **`Triggers`**, click `+ Add connection` → **`Calendar`** → **`Connect`**.

2. Under Calendar, choose from the following triggers:

   * **Event created:&#x20;**&#x52;uns when new events are added to your calendar.

   * **Event updated:** Runs when event details change (time, attendees, etc).

   * **Event cancelled:** Runs when events are removed from your calendar.

3. Choose the calendar(s) you want the trigger to run on.

4. Add a **filter** to narrow which events fire a Calendar trigger. Each trigger can be filtered to only run when an event meets criteria for a specified **title**, **description**, **location**, **owner**, or **all-day status.**

### Calendar permissions in Custom Agent

When you connect Calendar, you can choose which permissions your agent gets.

* **Read:** Allows the Custom Agent to view information without making changes to the calendar.

* **Read and write:** Allows the Custom Agent to view and change events in the calendar.

* **Require confirmation:** Requires a user to approve or cancel an action before it executes. When toggled off, the agent can modify events and send invites without approval.

* **Set as default:** Change which connected calendar your Agent should use by default.

  * If you have multiple calendars in the same calendar account, this sets the default calendar the agent will use unless you specify a different one.

  * If you connect multiple calendar accounts, you can choose a separate default calendar for each account.

## Sharing Custom Agents with Calendar connections

When sharing a Custom Agent with a Calendar connection, Agents show what **the user who set up the connection** is permitted to see in Calendar.

For example, if the connected user has a private event that only they can see the details of, any user with **`Can View and Interact`** access or greater can view that event.

When sharing a Custom Agent with a Calendar connection, any user with **`Can View and Interact`** access to an Agent can fully interact with the connected calendar.

## Example instructions for Custom Agent

To get the best results, give your Custom Agent specific instructions.

#### **Morning brief**

Get a daily summary of your meetings and priorities to start each day prepared.

**Tell your Custom Agent:&#x20;***"Every weekday morning at 8am, review my calendar for the day. Summarize my meetings with key details like attendees, times, and any prep work I need. Send me a notification with the summary."*

#### **Meeting prep assistant**

Automatically generate agendas or notes before important meetings.

**Tell your Custom Agent:&#x20;***"When a new external meeting is added to my calendar, create a page in my Meetings database. Include the meeting title, attendees, time, and a section for prep notes and action items."*

#### **Calendar optimizer**

Keep your calendar organized by handling routine scheduling tasks automatically.

**Tell your Custom Agent:&#x20;***"When someone requests a meeting via Slack, check my calendar for availability, find a time that works, create the event, and send invites to all participants."*

#### **Scheduling assistant**

Avoid scheduling chaos by finding optimal meeting times across multiple attendees.

**Tell your Custom Agent:** *"When I ask you to schedule a meeting with team members, use 'Find time with participants' to check everyone's availability. Suggest the top 3 options, then create the event once I confirm."*

## Troubleshooting

If your Custom Agent encounters errors, give the run a “thumbs down” and chat with the Agent to diagnose the issue. Then try these steps:

#### Connection errors

If you can’t find Calendar in `Tools & Access`, Calendar disconnects after a few days, or an Agent can't see events:

* Confirm Calendar is connected.

* Disconnect, clear cookies, reconnect with correct account.

#### Trigger errors

If your Agent isn’t running when a calendar event is changed, is running multiple times, or event details are not read properly:

* Check the `Activity` tab to see if trigger is firing.

* Verify Calendar connection is active in `Tools & Access`**.**

* Test with a simple event to isolate the issue.

#### If a trigger fires for events on the wrong calendar:

* Confirm trigger is set to the correct calendar (if you have multiple).


## FAQs

### Can my agent create events without my approval?

Yes, if you give it the appropriate permissions. If you want to review events before they're created, instruct your agent to suggest times and wait for your confirmation.


### Can I limit which events my agent can access?

Once connected, a Custom Agent will be able to process all events in your calendar. However, you can configure instructions, permissions and use triggers (like "Event create" only) to restrict which events the agent processes.


### Does the agent have access to all my calendar events?

The agent can only access events in calendars you've connected to Calendar and explicitly granted permission to access when setting up the connection.
