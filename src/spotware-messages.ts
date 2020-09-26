import $ from "@claasahl/spotware-protobuf";

interface Message<P, T> {
  payloadType: T;
  payload: P;
  clientMsgId?: string;
}
export type ProtoMessage5 = Message<
  $.ProtoMessage,
  $.ProtoPayloadType.PROTO_MESSAGE
>;
export type ProtoMessage50 = Message<
  $.ProtoErrorRes,
  $.ProtoPayloadType.ERROR_RES
>;
export type ProtoMessage51 = Message<
  $.ProtoHeartbeatEvent,
  $.ProtoPayloadType.HEARTBEAT_EVENT
>;
export type ProtoMessage2100 = Message<
  $.ProtoOAApplicationAuthReq,
  $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ
>;
export type ProtoMessage2101 = Message<
  $.ProtoOAApplicationAuthRes,
  $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES
>;
export type ProtoMessage2102 = Message<
  $.ProtoOAAccountAuthReq,
  $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ
>;
export type ProtoMessage2103 = Message<
  $.ProtoOAAccountAuthRes,
  $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES
>;
export type ProtoMessage2104 = Message<
  $.ProtoOAVersionReq,
  $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ
>;
export type ProtoMessage2105 = Message<
  $.ProtoOAVersionRes,
  $.ProtoOAPayloadType.PROTO_OA_VERSION_RES
>;
export type ProtoMessage2106 = Message<
  $.ProtoOANewOrderReq,
  $.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ
>;
export type ProtoMessage2107 = Message<
  $.ProtoOATrailingSLChangedEvent,
  $.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT
>;
export type ProtoMessage2108 = Message<
  $.ProtoOACancelOrderReq,
  $.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ
>;
export type ProtoMessage2109 = Message<
  $.ProtoOAAmendOrderReq,
  $.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ
>;
export type ProtoMessage2110 = Message<
  $.ProtoOAAmendPositionSLTPReq,
  $.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ
>;
export type ProtoMessage2111 = Message<
  $.ProtoOAClosePositionReq,
  $.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ
>;
export type ProtoMessage2112 = Message<
  $.ProtoOAAssetListReq,
  $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ
>;
export type ProtoMessage2113 = Message<
  $.ProtoOAAssetListRes,
  $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES
>;
export type ProtoMessage2114 = Message<
  $.ProtoOASymbolsListReq,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ
>;
export type ProtoMessage2115 = Message<
  $.ProtoOASymbolsListRes,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES
>;
export type ProtoMessage2116 = Message<
  $.ProtoOASymbolByIdReq,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ
>;
export type ProtoMessage2117 = Message<
  $.ProtoOASymbolByIdRes,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES
>;
export type ProtoMessage2118 = Message<
  $.ProtoOASymbolsForConversionReq,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ
>;
export type ProtoMessage2119 = Message<
  $.ProtoOASymbolsForConversionRes,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES
>;
export type ProtoMessage2120 = Message<
  $.ProtoOASymbolChangedEvent,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT
>;
export type ProtoMessage2121 = Message<
  $.ProtoOATraderReq,
  $.ProtoOAPayloadType.PROTO_OA_TRADER_REQ
>;
export type ProtoMessage2122 = Message<
  $.ProtoOATraderRes,
  $.ProtoOAPayloadType.PROTO_OA_TRADER_RES
>;
export type ProtoMessage2123 = Message<
  $.ProtoOATraderUpdatedEvent,
  $.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT
>;
export type ProtoMessage2124 = Message<
  $.ProtoOAReconcileReq,
  $.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ
>;
export type ProtoMessage2125 = Message<
  $.ProtoOAReconcileRes,
  $.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES
>;
export type ProtoMessage2126 = Message<
  $.ProtoOAExecutionEvent,
  $.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT
>;
export type ProtoMessage2127 = Message<
  $.ProtoOASubscribeSpotsReq,
  $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ
>;
export type ProtoMessage2128 = Message<
  $.ProtoOASubscribeSpotsRes,
  $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES
>;
export type ProtoMessage2129 = Message<
  $.ProtoOAUnsubscribeSpotsReq,
  $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ
>;
export type ProtoMessage2130 = Message<
  $.ProtoOAUnsubscribeSpotsRes,
  $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
>;
export type ProtoMessage2131 = Message<
  $.ProtoOASpotEvent,
  $.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT
>;
export type ProtoMessage2132 = Message<
  $.ProtoOAOrderErrorEvent,
  $.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT
>;
export type ProtoMessage2133 = Message<
  $.ProtoOADealListReq,
  $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ
>;
export type ProtoMessage2134 = Message<
  $.ProtoOADealListRes,
  $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES
>;
export type ProtoMessage2135 = Message<
  $.ProtoOASubscribeLiveTrendbarReq,
  $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ
>;
export type ProtoMessage2136 = Message<
  $.ProtoOAUnsubscribeLiveTrendbarReq,
  $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ
>;
export type ProtoMessage2137 = Message<
  $.ProtoOAGetTrendbarsReq,
  $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ
>;
export type ProtoMessage2138 = Message<
  $.ProtoOAGetTrendbarsRes,
  $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES
>;
export type ProtoMessage2139 = Message<
  $.ProtoOAExpectedMarginReq,
  $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ
>;
export type ProtoMessage2140 = Message<
  $.ProtoOAExpectedMarginRes,
  $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES
>;
export type ProtoMessage2141 = Message<
  $.ProtoOAMarginChangedEvent,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT
>;
export type ProtoMessage2142 = Message<
  $.ProtoOAErrorRes,
  $.ProtoOAPayloadType.PROTO_OA_ERROR_RES
>;
export type ProtoMessage2143 = Message<
  $.ProtoOACashFlowHistoryListReq,
  $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ
>;
export type ProtoMessage2144 = Message<
  $.ProtoOACashFlowHistoryListRes,
  $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES
>;
export type ProtoMessage2145 = Message<
  $.ProtoOAGetTickDataReq,
  $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ
>;
export type ProtoMessage2146 = Message<
  $.ProtoOAGetTickDataRes,
  $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES
>;
export type ProtoMessage2147 = Message<
  $.ProtoOAAccountsTokenInvalidatedEvent,
  $.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT
>;
export type ProtoMessage2148 = Message<
  $.ProtoOAClientDisconnectEvent,
  $.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT
>;
export type ProtoMessage2149 = Message<
  $.ProtoOAGetAccountListByAccessTokenReq,
  $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
>;
export type ProtoMessage2150 = Message<
  $.ProtoOAGetAccountListByAccessTokenRes,
  $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
>;
export type ProtoMessage2151 = Message<
  $.ProtoOAGetCtidProfileByTokenReq,
  $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ
>;
export type ProtoMessage2152 = Message<
  $.ProtoOAGetCtidProfileByTokenRes,
  $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES
>;
export type ProtoMessage2153 = Message<
  $.ProtoOAAssetClassListReq,
  $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ
>;
export type ProtoMessage2154 = Message<
  $.ProtoOAAssetClassListRes,
  $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES
>;
export type ProtoMessage2155 = Message<
  $.ProtoOADepthEvent,
  $.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT
>;
export type ProtoMessage2156 = Message<
  $.ProtoOASubscribeDepthQuotesReq,
  $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ
>;
export type ProtoMessage2157 = Message<
  $.ProtoOASubscribeDepthQuotesRes,
  $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES
>;
export type ProtoMessage2158 = Message<
  $.ProtoOAUnsubscribeDepthQuotesReq,
  $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ
>;
export type ProtoMessage2159 = Message<
  $.ProtoOAUnsubscribeDepthQuotesRes,
  $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES
>;
export type ProtoMessage2160 = Message<
  $.ProtoOASymbolCategoryListReq,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ
>;
export type ProtoMessage2161 = Message<
  $.ProtoOASymbolCategoryListRes,
  $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES
>;
export type ProtoMessage2162 = Message<
  $.ProtoOAAccountLogoutReq,
  $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ
>;
export type ProtoMessage2163 = Message<
  $.ProtoOAAccountLogoutRes,
  $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES
>;
export type ProtoMessage2164 = Message<
  $.ProtoOAAccountDisconnectEvent,
  $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT
>;
export type ProtoMessage2165 = Message<
  $.ProtoOASubscribeLiveTrendbarRes,
  $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES
>;
export type ProtoMessage2166 = Message<
  $.ProtoOAUnsubscribeLiveTrendbarRes,
  $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES
>;
export type ProtoMessage2167 = Message<
  $.ProtoOAMarginCallListReq,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ
>;
export type ProtoMessage2168 = Message<
  $.ProtoOAMarginCallListRes,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES
>;
export type ProtoMessage2169 = Message<
  $.ProtoOAMarginCallUpdateReq,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
>;
export type ProtoMessage2170 = Message<
  $.ProtoOAMarginCallUpdateRes,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
>;
export type ProtoMessage2171 = Message<
  $.ProtoOAMarginCallUpdateEvent,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT
>;
export type ProtoMessage2172 = Message<
  $.ProtoOAMarginCallTriggerEvent,
  $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT
>;
export type ProtoMessage2173 = Message<
  $.ProtoOARefreshTokenReq,
  $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ
>;
export type ProtoMessage2174 = Message<
  $.ProtoOARefreshTokenRes,
  $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES
>;

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
  | ProtoMessage2164
  | ProtoMessage2165
  | ProtoMessage2166
  | ProtoMessage2167
  | ProtoMessage2168
  | ProtoMessage2169
  | ProtoMessage2170
  | ProtoMessage2171
  | ProtoMessage2172
  | ProtoMessage2173
  | ProtoMessage2174;
