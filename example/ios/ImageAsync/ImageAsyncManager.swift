import AsyncDisplayKit

@objc(ImageAsyncManager)
class ImageAsyncManager: RCTViewManager {

  override func view() -> (ImageAsync) {
    return ImageAsync()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

class ImageAsync : UIView {
  
  let imageNode :ASVideoNode = ASVideoNode()
  
  override init(frame: CGRect) {
      super.init(frame: frame)
  }
   
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  
  @objc var color: String = "" {
    didSet {
//      self.imageNode.setURL(URL(string: color), resetToDefault: false)
      let asset = AVAsset(url: URL(string: color)!)
      imageNode.asset = asset

    }
  }
  
  override func layoutSubviews() {
//    if(self.imageNode.frame.width == 0 || self.imageNode.frame.width != self.frame.width ){
//      print("layoutSubviews")
//      self.imageNode.frame = self.bounds
//      self.imageNode.contentMode = .scaleAspectFill
//      self.imageNode.autoresizesSubviews = true
//      self.imageNode.shouldRenderProgressImages = false;
//      self.imageNode.shouldAnimateSizeChanges = true;
//      self.addSubnode(self.imageNode)
//    }
    if(self.imageNode.frame.width == 0 || self.imageNode.frame.width != self.frame.width ){
      print("layoutSubviews")
      self.imageNode.contentMode = .scaleAspectFill
      self.imageNode.frame = self.bounds
      self.imageNode.shouldAutoplay = true
      self.imageNode.shouldAutorepeat = true
      self.imageNode.muted = false
      self.addSubnode(self.imageNode)
    }
    
  }
}
