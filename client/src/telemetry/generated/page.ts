/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser. DO NOT EDIT. DO NOT COMMIT.

import UrlMetricType from "@mozilla/glean/private/metrics/url";

/**
 * The URL path of the page that was viewed.
 *
 * Generated from `page.path`.
 */
export const path = new UrlMetricType({
  category: "page",
  name: "path",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The referring URL that linked to the page that was viewed.
 *
 * Generated from `page.referrer`.
 */
export const referrer = new UrlMetricType({
  category: "page",
  name: "referrer",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});