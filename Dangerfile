#RULE: make sure that the PR has assignee
unless github.pr_json["assignee"]
    fail ("This PR does not have any assignees yet.")
    return
end

#SOFT-RULE: consider adding PR description
message ("PR description is empty. For large PR size, adding details helps with review.") if github.pr_body.length < 5

#RULE: make sure branch name follow format [PROJECT]-[ticket_number]
branch = "#{github.branch_for_head}"
if branch !~ /^([A-Z]+)-(\d+)/
    fail ("Hello @#{github.pr_author}, branch name must follow the defined format `[PROJECT]-[ticket_number]`, eg: SHOP-123 or LOYAL-321")
end

# RULE: check if commit message follows the format "[PROJECT]-[ticket_number]: [description]"
for commit in git.commits do
    #Exclude Merge or Revert commit title
    next if commit.message =~ /^(Merge remote-tracking branch '.*' into .*)|(Revert ".*")|(Merge branch '.*' into .*)$/

    if commit.message !~ /^#{branch}:\s(.)*/
        fail ("Hello @#{github.pr_author}, commit message \"#{commit.message}\" must follow the defined format \"#{branch}: [description]\"")
    end
end
