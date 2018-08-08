#import "EXNativeAdView.h"

#import <FBAudienceNetwork/FBAudienceNetwork.h>
#import <React/RCTUtils.h>

@interface EXNativeAdView ()

@end

@implementation EXNativeAdView

- (void)setNativeAd:(FBNativeAd *)nativeAd
{
  _nativeAd = nativeAd;

  _onAdLoaded(@{
      @"callToActionText": _nativeAd.callToAction,
    });
  }

@end
