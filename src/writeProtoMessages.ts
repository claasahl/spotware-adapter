import Pbf from "pbf";
import * as $ from "@claasahl/spotware-protobuf";

import * as util from "./spotware-utils";
import { ProtoMessages } from "./spotware-messages";

export function write(message: ProtoMessages): Buffer {
  const pbf = new Pbf();
  switch (message.payloadType) {
    case 5:
      $.ProtoMessageUtils.write(message.payload, pbf);
      break;
    case 50:
      $.ProtoErrorResUtils.write(message.payload, pbf);
      break;
    case 51:
      $.ProtoHeartbeatEventUtils.write(message.payload, pbf);
      break;
    case 2100:
      $.ProtoOAApplicationAuthReqUtils.write(message.payload, pbf);
      break;
    case 2101:
      $.ProtoOAApplicationAuthResUtils.write(message.payload, pbf);
      break;
    case 2102:
      $.ProtoOAAccountAuthReqUtils.write(message.payload, pbf);
      break;
    case 2103:
      $.ProtoOAAccountAuthResUtils.write(message.payload, pbf);
      break;
    case 2104:
      $.ProtoOAVersionReqUtils.write(message.payload, pbf);
      break;
    case 2105:
      $.ProtoOAVersionResUtils.write(message.payload, pbf);
      break;
    case 2106:
      $.ProtoOANewOrderReqUtils.write(message.payload, pbf);
      break;
    case 2107:
      $.ProtoOATrailingSLChangedEventUtils.write(message.payload, pbf);
      break;
    case 2108:
      $.ProtoOACancelOrderReqUtils.write(message.payload, pbf);
      break;
    case 2109:
      $.ProtoOAAmendOrderReqUtils.write(message.payload, pbf);
      break;
    case 2110:
      $.ProtoOAAmendPositionSLTPReqUtils.write(message.payload, pbf);
      break;
    case 2111:
      $.ProtoOAClosePositionReqUtils.write(message.payload, pbf);
      break;
    case 2112:
      $.ProtoOAAssetListReqUtils.write(message.payload, pbf);
      break;
    case 2113:
      $.ProtoOAAssetListResUtils.write(message.payload, pbf);
      break;
    case 2114:
      $.ProtoOASymbolsListReqUtils.write(message.payload, pbf);
      break;
    case 2115:
      $.ProtoOASymbolsListResUtils.write(message.payload, pbf);
      break;
    case 2116:
      $.ProtoOASymbolByIdReqUtils.write(message.payload, pbf);
      break;
    case 2117:
      $.ProtoOASymbolByIdResUtils.write(message.payload, pbf);
      break;
    case 2118:
      $.ProtoOASymbolsForConversionReqUtils.write(message.payload, pbf);
      break;
    case 2119:
      $.ProtoOASymbolsForConversionResUtils.write(message.payload, pbf);
      break;
    case 2120:
      $.ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
      break;
    case 2121:
      $.ProtoOATraderReqUtils.write(message.payload, pbf);
      break;
    case 2122:
      $.ProtoOATraderResUtils.write(message.payload, pbf);
      break;
    case 2123:
      $.ProtoOATraderUpdatedEventUtils.write(message.payload, pbf);
      break;
    case 2124:
      $.ProtoOAReconcileReqUtils.write(message.payload, pbf);
      break;
    case 2125:
      $.ProtoOAReconcileResUtils.write(message.payload, pbf);
      break;
    case 2126:
      $.ProtoOAExecutionEventUtils.write(message.payload, pbf);
      break;
    case 2127:
      $.ProtoOASubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case 2128:
      $.ProtoOASubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case 2129:
      $.ProtoOAUnsubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case 2130:
      $.ProtoOAUnsubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case 2131:
      $.ProtoOASpotEventUtils.write(message.payload, pbf);
      break;
    case 2132:
      $.ProtoOAOrderErrorEventUtils.write(message.payload, pbf);
      break;
    case 2133:
      $.ProtoOADealListReqUtils.write(message.payload, pbf);
      break;
    case 2134:
      $.ProtoOADealListResUtils.write(message.payload, pbf);
      break;
    case 2135:
      $.ProtoOASubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case 2136:
      $.ProtoOAUnsubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case 2137:
      $.ProtoOAGetTrendbarsReqUtils.write(message.payload, pbf);
      break;
    case 2138:
      $.ProtoOAGetTrendbarsResUtils.write(message.payload, pbf);
      break;
    case 2139:
      $.ProtoOAExpectedMarginReqUtils.write(message.payload, pbf);
      break;
    case 2140:
      $.ProtoOAExpectedMarginResUtils.write(message.payload, pbf);
      break;
    case 2141:
      $.ProtoOAMarginChangedEventUtils.write(message.payload, pbf);
      break;
    case 2142:
      $.ProtoOAErrorResUtils.write(message.payload, pbf);
      break;
    case 2143:
      $.ProtoOACashFlowHistoryListReqUtils.write(message.payload, pbf);
      break;
    case 2144:
      $.ProtoOACashFlowHistoryListResUtils.write(message.payload, pbf);
      break;
    case 2145:
      $.ProtoOAGetTickDataReqUtils.write(message.payload, pbf);
      break;
    case 2146:
      $.ProtoOAGetTickDataResUtils.write(message.payload, pbf);
      break;
    case 2147:
      $.ProtoOAAccountsTokenInvalidatedEventUtils.write(message.payload, pbf);
      break;
    case 2148:
      $.ProtoOAClientDisconnectEventUtils.write(message.payload, pbf);
      break;
    case 2149:
      $.ProtoOAGetAccountListByAccessTokenReqUtils.write(message.payload, pbf);
      break;
    case 2150:
      $.ProtoOAGetAccountListByAccessTokenResUtils.write(message.payload, pbf);
      break;
    case 2151:
      $.ProtoOAGetCtidProfileByTokenReqUtils.write(message.payload, pbf);
      break;
    case 2152:
      $.ProtoOAGetCtidProfileByTokenResUtils.write(message.payload, pbf);
      break;
    case 2153:
      $.ProtoOAAssetClassListReqUtils.write(message.payload, pbf);
      break;
    case 2154:
      $.ProtoOAAssetClassListResUtils.write(message.payload, pbf);
      break;
    case 2155:
      $.ProtoOADepthEventUtils.write(message.payload, pbf);
      break;
    case 2156:
      $.ProtoOASubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case 2157:
      $.ProtoOASubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case 2158:
      $.ProtoOAUnsubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case 2159:
      $.ProtoOAUnsubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case 2160:
      $.ProtoOASymbolCategoryListReqUtils.write(message.payload, pbf);
      break;
    case 2161:
      $.ProtoOASymbolCategoryListResUtils.write(message.payload, pbf);
      break;
    case 2162:
      $.ProtoOAAccountLogoutReqUtils.write(message.payload, pbf);
      break;
    case 2163:
      $.ProtoOAAccountLogoutResUtils.write(message.payload, pbf);
      break;
    case 2164:
      $.ProtoOAAccountDisconnectEventUtils.write(message.payload, pbf);
      break;
    case 2165:
      $.ProtoOASubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case 2166:
      $.ProtoOAUnsubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case 2167:
      $.ProtoOAMarginCallListReqUtils.write(message.payload, pbf);
      break;
    case 2168:
      $.ProtoOAMarginCallListResUtils.write(message.payload, pbf);
      break;
    case 2169:
      $.ProtoOAMarginCallUpdateReqUtils.write(message.payload, pbf);
      break;
    case 2170:
      $.ProtoOAMarginCallUpdateResUtils.write(message.payload, pbf);
      break;
    case 2171:
      $.ProtoOAMarginCallUpdateEventUtils.write(message.payload, pbf);
      break;
    case 2172:
      $.ProtoOAMarginCallTriggerEventUtils.write(message.payload, pbf);
      break;
    case 2173:
      $.ProtoOARefreshTokenReqUtils.write(message.payload, pbf);
      break;
    case 2174:
      $.ProtoOARefreshTokenResUtils.write(message.payload, pbf);
      break;
  }
  return util.serialize({
    ...message,
    payload: pbf.finish(),
  });
}

export default function writeProtoMessages(message: ProtoMessages): Uint8Array {
  const pbf = new Pbf();
  switch (message.payloadType) {
    case 5:
      $.ProtoMessageUtils.write(message.payload, pbf);
      break;
    case 50:
      $.ProtoErrorResUtils.write(message.payload, pbf);
      break;
    case 51:
      $.ProtoHeartbeatEventUtils.write(message.payload, pbf);
      break;
    case 2100:
      $.ProtoOAApplicationAuthReqUtils.write(message.payload, pbf);
      break;
    case 2101:
      $.ProtoOAApplicationAuthResUtils.write(message.payload, pbf);
      break;
    case 2102:
      $.ProtoOAAccountAuthReqUtils.write(message.payload, pbf);
      break;
    case 2103:
      $.ProtoOAAccountAuthResUtils.write(message.payload, pbf);
      break;
    case 2104:
      $.ProtoOAVersionReqUtils.write(message.payload, pbf);
      break;
    case 2105:
      $.ProtoOAVersionResUtils.write(message.payload, pbf);
      break;
    case 2106:
      $.ProtoOANewOrderReqUtils.write(message.payload, pbf);
      break;
    case 2107:
      $.ProtoOATrailingSLChangedEventUtils.write(message.payload, pbf);
      break;
    case 2108:
      $.ProtoOACancelOrderReqUtils.write(message.payload, pbf);
      break;
    case 2109:
      $.ProtoOAAmendOrderReqUtils.write(message.payload, pbf);
      break;
    case 2110:
      $.ProtoOAAmendPositionSLTPReqUtils.write(message.payload, pbf);
      break;
    case 2111:
      $.ProtoOAClosePositionReqUtils.write(message.payload, pbf);
      break;
    case 2112:
      $.ProtoOAAssetListReqUtils.write(message.payload, pbf);
      break;
    case 2113:
      $.ProtoOAAssetListResUtils.write(message.payload, pbf);
      break;
    case 2114:
      $.ProtoOASymbolsListReqUtils.write(message.payload, pbf);
      break;
    case 2115:
      $.ProtoOASymbolsListResUtils.write(message.payload, pbf);
      break;
    case 2116:
      $.ProtoOASymbolByIdReqUtils.write(message.payload, pbf);
      break;
    case 2117:
      $.ProtoOASymbolByIdResUtils.write(message.payload, pbf);
      break;
    case 2118:
      $.ProtoOASymbolsForConversionReqUtils.write(message.payload, pbf);
      break;
    case 2119:
      $.ProtoOASymbolsForConversionResUtils.write(message.payload, pbf);
      break;
    case 2120:
      $.ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
      break;
    case 2121:
      $.ProtoOATraderReqUtils.write(message.payload, pbf);
      break;
    case 2122:
      $.ProtoOATraderResUtils.write(message.payload, pbf);
      break;
    case 2123:
      $.ProtoOATraderUpdatedEventUtils.write(message.payload, pbf);
      break;
    case 2124:
      $.ProtoOAReconcileReqUtils.write(message.payload, pbf);
      break;
    case 2125:
      $.ProtoOAReconcileResUtils.write(message.payload, pbf);
      break;
    case 2126:
      $.ProtoOAExecutionEventUtils.write(message.payload, pbf);
      break;
    case 2127:
      $.ProtoOASubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case 2128:
      $.ProtoOASubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case 2129:
      $.ProtoOAUnsubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case 2130:
      $.ProtoOAUnsubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case 2131:
      $.ProtoOASpotEventUtils.write(message.payload, pbf);
      break;
    case 2132:
      $.ProtoOAOrderErrorEventUtils.write(message.payload, pbf);
      break;
    case 2133:
      $.ProtoOADealListReqUtils.write(message.payload, pbf);
      break;
    case 2134:
      $.ProtoOADealListResUtils.write(message.payload, pbf);
      break;
    case 2135:
      $.ProtoOASubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case 2136:
      $.ProtoOAUnsubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case 2137:
      $.ProtoOAGetTrendbarsReqUtils.write(message.payload, pbf);
      break;
    case 2138:
      $.ProtoOAGetTrendbarsResUtils.write(message.payload, pbf);
      break;
    case 2139:
      $.ProtoOAExpectedMarginReqUtils.write(message.payload, pbf);
      break;
    case 2140:
      $.ProtoOAExpectedMarginResUtils.write(message.payload, pbf);
      break;
    case 2141:
      $.ProtoOAMarginChangedEventUtils.write(message.payload, pbf);
      break;
    case 2142:
      $.ProtoOAErrorResUtils.write(message.payload, pbf);
      break;
    case 2143:
      $.ProtoOACashFlowHistoryListReqUtils.write(message.payload, pbf);
      break;
    case 2144:
      $.ProtoOACashFlowHistoryListResUtils.write(message.payload, pbf);
      break;
    case 2145:
      $.ProtoOAGetTickDataReqUtils.write(message.payload, pbf);
      break;
    case 2146:
      $.ProtoOAGetTickDataResUtils.write(message.payload, pbf);
      break;
    case 2147:
      $.ProtoOAAccountsTokenInvalidatedEventUtils.write(message.payload, pbf);
      break;
    case 2148:
      $.ProtoOAClientDisconnectEventUtils.write(message.payload, pbf);
      break;
    case 2149:
      $.ProtoOAGetAccountListByAccessTokenReqUtils.write(message.payload, pbf);
      break;
    case 2150:
      $.ProtoOAGetAccountListByAccessTokenResUtils.write(message.payload, pbf);
      break;
    case 2151:
      $.ProtoOAGetCtidProfileByTokenReqUtils.write(message.payload, pbf);
      break;
    case 2152:
      $.ProtoOAGetCtidProfileByTokenResUtils.write(message.payload, pbf);
      break;
    case 2153:
      $.ProtoOAAssetClassListReqUtils.write(message.payload, pbf);
      break;
    case 2154:
      $.ProtoOAAssetClassListResUtils.write(message.payload, pbf);
      break;
    case 2155:
      $.ProtoOADepthEventUtils.write(message.payload, pbf);
      break;
    case 2156:
      $.ProtoOASubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case 2157:
      $.ProtoOASubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case 2158:
      $.ProtoOAUnsubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case 2159:
      $.ProtoOAUnsubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case 2160:
      $.ProtoOASymbolCategoryListReqUtils.write(message.payload, pbf);
      break;
    case 2161:
      $.ProtoOASymbolCategoryListResUtils.write(message.payload, pbf);
      break;
    case 2162:
      $.ProtoOAAccountLogoutReqUtils.write(message.payload, pbf);
      break;
    case 2163:
      $.ProtoOAAccountLogoutResUtils.write(message.payload, pbf);
      break;
    case 2164:
      $.ProtoOAAccountDisconnectEventUtils.write(message.payload, pbf);
      break;
    case 2165:
      $.ProtoOASubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case 2166:
      $.ProtoOAUnsubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case 2167:
      $.ProtoOAMarginCallListReqUtils.write(message.payload, pbf);
      break;
    case 2168:
      $.ProtoOAMarginCallListResUtils.write(message.payload, pbf);
      break;
    case 2169:
      $.ProtoOAMarginCallUpdateReqUtils.write(message.payload, pbf);
      break;
    case 2170:
      $.ProtoOAMarginCallUpdateResUtils.write(message.payload, pbf);
      break;
    case 2171:
      $.ProtoOAMarginCallUpdateEventUtils.write(message.payload, pbf);
      break;
    case 2172:
      $.ProtoOAMarginCallTriggerEventUtils.write(message.payload, pbf);
      break;
    case 2173:
      $.ProtoOARefreshTokenReqUtils.write(message.payload, pbf);
      break;
    case 2174:
      $.ProtoOARefreshTokenResUtils.write(message.payload, pbf);
      break;
  }
  return pbf.finish();
}
