import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class extends Controller {
  @tracked q = "";
  @tracked model;

  queryParams = ["q"];

  @action
  updateTopicsListQueryParams(queryString) {
    this.q = queryString;
  }
}
