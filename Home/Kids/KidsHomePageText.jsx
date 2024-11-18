export const getKidsTextByColor = (color) => {
    switch(color){
        case "Blue":
            return "Blues learn best through patience and gentle understanding. They respond well to calm requests, reflective listening, "+
            "and open, honest communication. The Blue child has a deep need to be heard and seen. They will repeat information "+
            "about their inappropriate behaviors or stories about other people misbehaving until they perceive they have been fully "+
            "understood. When your Blue child enters circular conversations, it is time to use reflective listening. When they have "+
            "crossed a boundary give them the chance to fix the situation or to try again. Use calm, gentle words when you redirect them, "+
            "make your unconditional love clear, and offer physical affection if they crave that."              
        case "Green":
            return "The Green child learns best by being allowed to act independently then experience consequences connected on those "+
            "independent actions. They need to be held accountable for their choices. Green children will try to complete tasks "+
            "before most parents think they are ready to handle the task, when safe and possible, allow your Green child this level "+
            "of independence. Greens are hands-on learners and must be allowed to experience and suffer the consequences of their "+
            "actions. When rescued, coddled, or helicopter parented Green children learn that consequences do not apply to them and "+
            "that they can work around accountability. Focus your parenting efforts on allowing them to fail and learn from their "+
            "failures. Use logical or natural consequences to help them connect the dots between their actions and the consequences."
        case "Orange":
            return "Oranges learn best in action. They need clear boundaries or rules they can see. "+
            "When possible, these boundaries or rules need to be explained before the "+
            "Orange child is expected to make a wise choice. If you have not made the "+
            "boundary concrete/visual or fully explained the consequences of crossing the "+
            "boundary do not expect your Orange to make a wise choice, expect them to "+
            "make the easy or fun choice. Focus your parenting around rewarding wise "+
            "choices and fully explaining future boundaries and rules. Use short disciplinary "+
            "actions or they will forget why they are being disciplined and the lesson will be "+
            "lost on them."
        case "Gold":
            return "Golds learn best when given clear expectations up front. They need to "+
            "understand what is expected of them before they can commit to a plan of action "+
            "or before they can accurately complete a task. They appreciate to-do lists, visual "+
            "examples, and clear instructions when completing a task. Focus your parenting "+
            "on recognizing them for their responsible actions, for their consistent hard work, "+
            "and for their obedience. Gold children need the most verbal validation of the four "+
            "first color types but typically get the least. Use short disciplinary actions that allow "+
            "your Gold to redeem themselves through service to you or to their family."
    }
}

export const getInstructionsText = () => {
    return "When your child is upset, look for one of their 3 words "+
                "is being challenged to understand the underlying issue and "+
                "get to the root of the problem"
}

export const getKidsDisclaimerText = () => {
    return "We don’t recommend parenting by your child’s second color under the age of 12. "+
    "Here are all the first color options your children could lean towards"
}