with(new JavaImporter(
	java.lang.System,
	java.awt.datatransfer,
	java.io.File,
	com.intellij.openapi.ide,
	com.intellij.openapi.application,
	com.intellij.openapi.project,
	com.intellij.openapi.wm,
	com.intellij.openapi.actionSystem,
	com.intellij.openapi.fileEditor,
	com.intellij.openapi.roots,
	com.intellij.openapi.vfs,
	com.intellij.openapi.vcs,
	com.intellij.codeInsight.template.impl,
	com.intellij.openapi.command.UndoConfirmationPolicy,
	com.intellij.openapi.command.CommandProcessor,
	com.intellij.util.Alarm
)) {

	function registerAction(code, name, callable) {
		var actionManager = ActionManager.instance;
		var tools = actionManager.getAction('ToolsMenu');
		var existing = actionManager.getAction(code);

		if(existing != null) {
			tools.remove(existing);
			actionManager.unregisterAction(code);
		}

		var action = intellij.createAction(plugin, code, name, {actionPerformed: callable});
		actionManager.getAction('ToolsMenu').add(action, new Constraints(Anchor.BEFORE, Anchor.LAST));

		return action;
	}

	var runnable = function(run) {
		return new java.lang.Runnable({run: run})
	};

	var showError = function(exception) {
		alert('Exception!\n' + (exception.stack || exception));
	}

	registerAction("JackDTaylor.RefreshProjectBasedir", "Refresh Project Basedir", function(actionEvent) {
		try {
			var Thread = Java.type("java.lang.Thread");
			var worker = function() {
				try {
					var left = 7;

					while(left-- > 0) {
						project.getBaseDir().refresh(false, true);

						Thread.sleep(500);
					}
				} catch(e) {showError(e);}
			};

			new Thread(worker).start();
		} catch(e) {showError(e);}
	});
}
