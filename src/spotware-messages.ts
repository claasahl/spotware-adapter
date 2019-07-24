import $ from "@claasahl/spotware-protobuf";

interface Message<P, T> {
  payloadType: T;
  payload: P;
  clientMsgId?: string;
}
export type ProtoMessages =
  | Message<$.ProtoMessage, 5>
  | Message<$.ProtoErrorRes, 50>
  | Message<$.ProtoHeartbeatEvent, 51>
  | Message<$.ProtoOAApplicationAuthReq, 2100>
  | Message<$.ProtoOAApplicationAuthRes, 2101>
  | Message<$.ProtoOAAccountAuthReq, 2102>
  | Message<$.ProtoOAAccountAuthRes, 2103>
  | Message<$.ProtoOAVersionReq, 2104>
  | Message<$.ProtoOAVersionRes, 2105>
  | Message<$.ProtoOANewOrderReq, 2106>
  | Message<$.ProtoOATrailingSLChangedEvent, 2107>
  | Message<$.ProtoOACancelOrderReq, 2108>
  | Message<$.ProtoOAAmendOrderReq, 2109>
  | Message<$.ProtoOAAmendPositionSLTPReq, 2110>
  | Message<$.ProtoOAClosePositionReq, 2111>
  | Message<$.ProtoOAAssetListReq, 2112>
  | Message<$.ProtoOAAssetListRes, 2113>
  | Message<$.ProtoOASymbolsListReq, 2114>
  | Message<$.ProtoOASymbolsListRes, 2115>
  | Message<$.ProtoOASymbolByIdReq, 2116>
  | Message<$.ProtoOASymbolByIdRes, 2117>
  | Message<$.ProtoOASymbolsForConversionReq, 2118>
  | Message<$.ProtoOASymbolsForConversionRes, 2119>
  | Message<$.ProtoOASymbolChangedEvent, 2120>
  | Message<$.ProtoOATraderReq, 2121>
  | Message<$.ProtoOATraderRes, 2122>
  | Message<$.ProtoOATraderUpdatedEvent, 2123>
  | Message<$.ProtoOAReconcileReq, 2124>
  | Message<$.ProtoOAReconcileRes, 2125>
  | Message<$.ProtoOAExecutionEvent, 2126>
  | Message<$.ProtoOASubscribeSpotsReq, 2127>
  | Message<$.ProtoOASubscribeSpotsRes, 2128>
  | Message<$.ProtoOAUnsubscribeSpotsReq, 2129>
  | Message<$.ProtoOAUnsubscribeSpotsRes, 2130>
  | Message<$.ProtoOASpotEvent, 2131>
  | Message<$.ProtoOAOrderErrorEvent, 2132>
  | Message<$.ProtoOADealListReq, 2133>
  | Message<$.ProtoOADealListRes, 2134>
  | Message<$.ProtoOASubscribeLiveTrendbarReq, 2135>
  | Message<$.ProtoOAUnsubscribeLiveTrendbarReq, 2136>
  | Message<$.ProtoOAGetTrendbarsReq, 2137>
  | Message<$.ProtoOAGetTrendbarsRes, 2138>
  | Message<$.ProtoOAExpectedMarginReq, 2139>
  | Message<$.ProtoOAExpectedMarginRes, 2140>
  | Message<$.ProtoOAMarginChangedEvent, 2141>
  | Message<$.ProtoOAErrorRes, 2142>
  | Message<$.ProtoOACashFlowHistoryListReq, 2143>
  | Message<$.ProtoOACashFlowHistoryListRes, 2144>
  | Message<$.ProtoOAGetTickDataReq, 2145>
  | Message<$.ProtoOAGetTickDataRes, 2146>
  | Message<$.ProtoOAAccountsTokenInvalidatedEvent, 2147>
  | Message<$.ProtoOAClientDisconnectEvent, 2148>
  | Message<$.ProtoOAGetAccountListByAccessTokenReq, 2149>
  | Message<$.ProtoOAGetAccountListByAccessTokenRes, 2150>
  | Message<$.ProtoOAGetCtidProfileByTokenReq, 2151>
  | Message<$.ProtoOAGetCtidProfileByTokenRes, 2152>
  | Message<$.ProtoOAAssetClassListReq, 2153>
  | Message<$.ProtoOAAssetClassListRes, 2154>
  | Message<$.ProtoOADepthEvent, 2155>
  | Message<$.ProtoOASubscribeDepthQuotesReq, 2156>
  | Message<$.ProtoOASubscribeDepthQuotesRes, 2157>
  | Message<$.ProtoOAUnsubscribeDepthQuotesReq, 2158>
  | Message<$.ProtoOAUnsubscribeDepthQuotesRes, 2159>
  | Message<$.ProtoOASymbolCategoryListReq, 2160>
  | Message<$.ProtoOASymbolCategoryListRes, 2161>
  | Message<$.ProtoOAAccountLogoutReq, 2162>
  | Message<$.ProtoOAAccountLogoutRes, 2163>
  | Message<$.ProtoOAAccountDisconnectEvent, 2164>;
