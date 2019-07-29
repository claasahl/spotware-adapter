import $ from "@claasahl/spotware-protobuf";

interface Message<P, T> {
  payloadType: T;
  payload: P;
  clientMsgId?: string;
}
export type ProtoMessage5 = Message<$.ProtoMessage, 5>;
export type ProtoMessage50 = Message<$.ProtoErrorRes, 50>;
export type ProtoMessage51 = Message<$.ProtoHeartbeatEvent, 51>;
export type ProtoMessage2100 = Message<$.ProtoOAApplicationAuthReq, 2100>;
export type ProtoMessage2101 = Message<$.ProtoOAApplicationAuthRes, 2101>;
export type ProtoMessage2102 = Message<$.ProtoOAAccountAuthReq, 2102>;
export type ProtoMessage2103 = Message<$.ProtoOAAccountAuthRes, 2103>;
export type ProtoMessage2104 = Message<$.ProtoOAVersionReq, 2104>;
export type ProtoMessage2105 = Message<$.ProtoOAVersionRes, 2105>;
export type ProtoMessage2106 = Message<$.ProtoOANewOrderReq, 2106>;
export type ProtoMessage2107 = Message<$.ProtoOATrailingSLChangedEvent, 2107>;
export type ProtoMessage2108 = Message<$.ProtoOACancelOrderReq, 2108>;
export type ProtoMessage2109 = Message<$.ProtoOAAmendOrderReq, 2109>;
export type ProtoMessage2110 = Message<$.ProtoOAAmendPositionSLTPReq, 2110>;
export type ProtoMessage2111 = Message<$.ProtoOAClosePositionReq, 2111>;
export type ProtoMessage2112 = Message<$.ProtoOAAssetListReq, 2112>;
export type ProtoMessage2113 = Message<$.ProtoOAAssetListRes, 2113>;
export type ProtoMessage2114 = Message<$.ProtoOASymbolsListReq, 2114>;
export type ProtoMessage2115 = Message<$.ProtoOASymbolsListRes, 2115>;
export type ProtoMessage2116 = Message<$.ProtoOASymbolByIdReq, 2116>;
export type ProtoMessage2117 = Message<$.ProtoOASymbolByIdRes, 2117>;
export type ProtoMessage2118 = Message<$.ProtoOASymbolsForConversionReq, 2118>;
export type ProtoMessage2119 = Message<$.ProtoOASymbolsForConversionRes, 2119>;
export type ProtoMessage2120 = Message<$.ProtoOASymbolChangedEvent, 2120>;
export type ProtoMessage2121 = Message<$.ProtoOATraderReq, 2121>;
export type ProtoMessage2122 = Message<$.ProtoOATraderRes, 2122>;
export type ProtoMessage2123 = Message<$.ProtoOATraderUpdatedEvent, 2123>;
export type ProtoMessage2124 = Message<$.ProtoOAReconcileReq, 2124>;
export type ProtoMessage2125 = Message<$.ProtoOAReconcileRes, 2125>;
export type ProtoMessage2126 = Message<$.ProtoOAExecutionEvent, 2126>;
export type ProtoMessage2127 = Message<$.ProtoOASubscribeSpotsReq, 2127>;
export type ProtoMessage2128 = Message<$.ProtoOASubscribeSpotsRes, 2128>;
export type ProtoMessage2129 = Message<$.ProtoOAUnsubscribeSpotsReq, 2129>;
export type ProtoMessage2130 = Message<$.ProtoOAUnsubscribeSpotsRes, 2130>;
export type ProtoMessage2131 = Message<$.ProtoOASpotEvent, 2131>;
export type ProtoMessage2132 = Message<$.ProtoOAOrderErrorEvent, 2132>;
export type ProtoMessage2133 = Message<$.ProtoOADealListReq, 2133>;
export type ProtoMessage2134 = Message<$.ProtoOADealListRes, 2134>;
export type ProtoMessage2135 = Message<$.ProtoOASubscribeLiveTrendbarReq, 2135>;
export type ProtoMessage2136 = Message<
  $.ProtoOAUnsubscribeLiveTrendbarReq,
  2136
>;
export type ProtoMessage2137 = Message<$.ProtoOAGetTrendbarsReq, 2137>;
export type ProtoMessage2138 = Message<$.ProtoOAGetTrendbarsRes, 2138>;
export type ProtoMessage2139 = Message<$.ProtoOAExpectedMarginReq, 2139>;
export type ProtoMessage2140 = Message<$.ProtoOAExpectedMarginRes, 2140>;
export type ProtoMessage2141 = Message<$.ProtoOAMarginChangedEvent, 2141>;
export type ProtoMessage2142 = Message<$.ProtoOAErrorRes, 2142>;
export type ProtoMessage2143 = Message<$.ProtoOACashFlowHistoryListReq, 2143>;
export type ProtoMessage2144 = Message<$.ProtoOACashFlowHistoryListRes, 2144>;
export type ProtoMessage2145 = Message<$.ProtoOAGetTickDataReq, 2145>;
export type ProtoMessage2146 = Message<$.ProtoOAGetTickDataRes, 2146>;
export type ProtoMessage2147 = Message<
  $.ProtoOAAccountsTokenInvalidatedEvent,
  2147
>;
export type ProtoMessage2148 = Message<$.ProtoOAClientDisconnectEvent, 2148>;
export type ProtoMessage2149 = Message<
  $.ProtoOAGetAccountListByAccessTokenReq,
  2149
>;
export type ProtoMessage2150 = Message<
  $.ProtoOAGetAccountListByAccessTokenRes,
  2150
>;
export type ProtoMessage2151 = Message<$.ProtoOAGetCtidProfileByTokenReq, 2151>;
export type ProtoMessage2152 = Message<$.ProtoOAGetCtidProfileByTokenRes, 2152>;
export type ProtoMessage2153 = Message<$.ProtoOAAssetClassListReq, 2153>;
export type ProtoMessage2154 = Message<$.ProtoOAAssetClassListRes, 2154>;
export type ProtoMessage2155 = Message<$.ProtoOADepthEvent, 2155>;
export type ProtoMessage2156 = Message<$.ProtoOASubscribeDepthQuotesReq, 2156>;
export type ProtoMessage2157 = Message<$.ProtoOASubscribeDepthQuotesRes, 2157>;
export type ProtoMessage2158 = Message<
  $.ProtoOAUnsubscribeDepthQuotesReq,
  2158
>;
export type ProtoMessage2159 = Message<
  $.ProtoOAUnsubscribeDepthQuotesRes,
  2159
>;
export type ProtoMessage2160 = Message<$.ProtoOASymbolCategoryListReq, 2160>;
export type ProtoMessage2161 = Message<$.ProtoOASymbolCategoryListRes, 2161>;
export type ProtoMessage2162 = Message<$.ProtoOAAccountLogoutReq, 2162>;
export type ProtoMessage2163 = Message<$.ProtoOAAccountLogoutRes, 2163>;
export type ProtoMessage2164 = Message<$.ProtoOAAccountDisconnectEvent, 2164>;

export type ProtoMessages =
  | ProtoMessage5
  | ProtoMessage50
  | ProtoMessage51
  | ProtoMessage2100
  | ProtoMessage2101
  | ProtoMessage2102
  | ProtoMessage2103
  | ProtoMessage2104
  | ProtoMessage2105
  | ProtoMessage2106
  | ProtoMessage2107
  | ProtoMessage2108
  | ProtoMessage2109
  | ProtoMessage2110
  | ProtoMessage2111
  | ProtoMessage2112
  | ProtoMessage2113
  | ProtoMessage2114
  | ProtoMessage2115
  | ProtoMessage2116
  | ProtoMessage2117
  | ProtoMessage2118
  | ProtoMessage2119
  | ProtoMessage2120
  | ProtoMessage2121
  | ProtoMessage2122
  | ProtoMessage2123
  | ProtoMessage2124
  | ProtoMessage2125
  | ProtoMessage2126
  | ProtoMessage2127
  | ProtoMessage2128
  | ProtoMessage2129
  | ProtoMessage2130
  | ProtoMessage2131
  | ProtoMessage2132
  | ProtoMessage2133
  | ProtoMessage2134
  | ProtoMessage2135
  | ProtoMessage2136
  | ProtoMessage2137
  | ProtoMessage2138
  | ProtoMessage2139
  | ProtoMessage2140
  | ProtoMessage2141
  | ProtoMessage2142
  | ProtoMessage2143
  | ProtoMessage2144
  | ProtoMessage2145
  | ProtoMessage2146
  | ProtoMessage2147
  | ProtoMessage2148
  | ProtoMessage2149
  | ProtoMessage2150
  | ProtoMessage2151
  | ProtoMessage2152
  | ProtoMessage2153
  | ProtoMessage2154
  | ProtoMessage2155
  | ProtoMessage2156
  | ProtoMessage2157
  | ProtoMessage2158
  | ProtoMessage2159
  | ProtoMessage2160
  | ProtoMessage2161
  | ProtoMessage2162
  | ProtoMessage2163
  | ProtoMessage2164;
