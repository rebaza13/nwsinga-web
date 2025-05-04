package com.getcapacitor;

import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.inputmethod.BaseInputConnection;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.webkit.WebView;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import android.view.ViewGroup.MarginLayoutParams;

// Import the correct Capacitor 7.0.0 classes
import com.capacitorjs.android.core.Bridge;
import com.capacitorjs.android.core.CapConfig;

public class CapacitorWebView extends WebView {

    private BaseInputConnection capInputConnection;
    private Bridge bridge;

    public CapacitorWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public void setBridge(Bridge bridge) {
        this.bridge = bridge;
    }

    @Override
    public InputConnection onCreateInputConnection(EditorInfo outAttrs) {
        CapConfig config;
        if (bridge != null) {
            config = bridge.getConfig();
        } else {
            config = CapConfig.loadDefault(getContext());
        }

        boolean captureInput = config.isInputCaptured();
        if (captureInput) {
            if (capInputConnection == null) {
                capInputConnection = new BaseInputConnection(this, false);
            }
            return capInputConnection;
        }
        return super.onCreateInputConnection(outAttrs);
    }

    @Override
    @SuppressWarnings("deprecation")
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getAction() == KeyEvent.ACTION_MULTIPLE) {
            evaluateJavascript("document.activeElement.value = document.activeElement.value + '" + event.getCharacters() + "';", null);
            return false;
        }
        return super.dispatchKeyEvent(event);
    }

    public void edgeToEdgeHandler(Bridge bridge) {
        String configEdgeToEdge = bridge.getConfig().adjustMarginsForEdgeToEdge();

        if (configEdgeToEdge.equals("disable")) return;

        boolean autoMargins = false;
        boolean forceMargins = configEdgeToEdge.equals("force");

        // Simplified edge-to-edge handling for Android 14+
        if (Build.VERSION.SDK_INT >= 34 && configEdgeToEdge.equals("auto")) {
            // For Android 14+, we'll just enable auto margins by default
            // since we can't access the new attribute directly
            autoMargins = true;
        }

        if (forceMargins || autoMargins) {
            ViewCompat.setOnApplyWindowInsetsListener(this, (v, windowInsets) -> {
                Insets insets = windowInsets.getInsets(WindowInsetsCompat.Type.systemBars());
                MarginLayoutParams mlp = (MarginLayoutParams) v.getLayoutParams();
                mlp.leftMargin = insets.left;
                mlp.bottomMargin = insets.bottom;
                mlp.rightMargin = insets.right;
                mlp.topMargin = insets.top;
                v.setLayoutParams(mlp);

                // Don't pass window insets to children
                return WindowInsetsCompat.CONSUMED;
            });
        }
    }
}
