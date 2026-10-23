import { ApplicationModel } from '../engine/model';
/**
 * Parses Mode B Structured DSL into an ApplicationModel.
 *
 * Example:
 * page "Members"
 *   path "/members"
 *   title "Member Management"
 *
 * resource "Member"
 *   endpoint "/api/members"
 *   field "name" as text required
 *   field "email" as email required
 *   field "role" as select options ["Admin", "Developer", "Designer"]
 *
 * table "Member"
 *   searchable
 *
 * action "create" for "Member"
 * action "delete" for "Member"
 */
export declare function parseStructuredDSL(dslText: string): ApplicationModel;
