import React from 'react';

function ProfilePreview({ readme }) {
  return (
    <div className="profile-preview">
      <h2>📄 README Preview</h2>
      <div className="preview-content">
        {readme || 'Fill in the form to see your README preview...'}
      </div>
    </div>
  );
}

export default ProfilePreview;