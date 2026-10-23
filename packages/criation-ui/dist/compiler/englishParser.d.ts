import { ApplicationModel } from '../engine/model';
/**
 * Parses Mode A Plain-English descriptions into a structured ApplicationModel.
 *
 * Supports descriptions such as:
 * "Create a page called Members.
 * Show all members in a searchable table.
 * Add a button called Add Member.
 * When clicked, open a form with Name, Email, and Role.
 * Require all fields and validate the email.
 * When the form is submitted, save the member using the Members API.
 * Show a confirmation dialog before deleting a member."
 */
export declare function parseEnglishDescription(englishText: string): ApplicationModel;
