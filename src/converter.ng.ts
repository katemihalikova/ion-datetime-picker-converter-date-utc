import * as angular from "angular";
import DateUtcConverter from "./converter";

angular.module("ion-datetime-picker").service("$ionDtpConverterDateUtc", DateUtcConverter);
